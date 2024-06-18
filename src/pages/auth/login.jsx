import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/atom/button";
import Heading from "../../components/atom/heading";
import Input from "../../components/atom/input";
import Label from "../../components/atom/label";
import Paragraph from "../../components/atom/paragraph";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { toast } from "sonner";
import baseUrl from "../../utils/config";
import ErrorLine from "../../components/atom/error-line";
import { cn } from "../../utils/cn";

export default function Login() {
  const [eyePassword, setEyePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => loginHandler(values),
  });

  const loginHandler = async (values) => {
    setLoading(true);
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      setLoading(false);
      const resp = await response.json();
      toast.error(resp.error);
      return;
    }

    const res = await response.json();
    setLoading(false);
    toast.success(res.message);
    navigate("/");
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-[40px] lg:px-20 lg:py-5"
    >
      <div className="flex flex-col gap-5">
        <Heading className="lg:text-[54px]">Login</Heading>
        <Paragraph className="lg:w-[470px]">
          Masukan Email dan Passwordmu yang sudah teradaftar.
        </Paragraph>
      </div>
      <div className="flex flex-col gap-[52px]">
        <div className="flex flex-col gap-[10px]">
          <Label>Email</Label>
          <Input
            placeholder="Masukan Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ErrorLine error={formik.errors.email} />
        </div>
        <div className="flex flex-col gap-[10px]">
          <Label>Password</Label>
          <div className="relative">
            <Input
              placeholder="Masukan Password"
              name="password"
              type={cn(eyePassword ? "text" : "password")}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <button className="absolute -translate-y-1/2 right-4 top-1/2">
              <img
                src="/eye.svg"
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  setEyePassword(!eyePassword);
                }}
              />
            </button>
          </div>
          <ErrorLine error={formik.errors.password} />
        </div>
        <a href="/" className="text-blue-500 text-link lg:text-lg">
          Lupa Password??
        </a>
      </div>
      <div className="flex flex-col gap-[22px] w-full">
        <Button type="submit" disabled={!formik.isValid || loading}>
          {loading ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            "Continue"
          )}
        </Button>{" "}
        <Button variant="secondary">
          <Link to="/register">Belum ada akun? Daftar Yuk!</Link>
        </Button>
      </div>
    </form>
  );
}
