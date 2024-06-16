import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/atom/button";
import Heading from "../../components/atom/heading";
import Input from "../../components/atom/input";
import Label from "../../components/atom/label";
import Paragraph from "../../components/atom/paragraph";
import { useState } from "react";
import { cn } from "../../utils/cn";
import { useFormik } from "formik";
import * as Yup from "yup";
import baseUrl from "../../utils/config";
import { toast } from "sonner";
import ErrorLine from "../../components/atom/error-line";

export default function Register() {
  const [eyePassword, setEyePassword] = useState(false);
  const [eyeConfirm, setEyeConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => registerHandler(values),
  });

  const registerHandler = async (values) => {
    setLoading(true);
    const response = await fetch(`${baseUrl}/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
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
    navigate("/login");
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-[40px] lg:px-20 lg:py-5"
    >
      <div className="flex flex-col gap-1">
        <Heading className="lg:text-[54px]">Register</Heading>
        <Paragraph className="lg:w-[470px] text-black">
          Masukan Email dan Passwordmu untuk pendaftaran
        </Paragraph>
      </div>
      <div className="flex flex-col gap-[1px]">
        <div className="flex flex-col gap-[10px] text-black">
          <Label>Username</Label>
          <Input
            placeholder="Masukan Username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ErrorLine error={formik.errors.username} />
        </div>
        <div className="flex flex-col gap-[10px]">
          <Label>Email</Label>
          <Input
            placeholder="Masukan Email"
            type="email"
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
              type={cn(eyePassword ? "text" : "password")}
              name="password"
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
        <div className="flex flex-col gap-[8px]">
          <Label>Confirm Password</Label>
          <div className="relative">
            <Input
              placeholder="Konfirmasi Password"
              type={cn(eyeConfirm ? "text" : "password")}
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <button className="absolute -translate-y-1/2 right-4 top-1/2">
              <img
                src="/eye.svg"
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  setEyeConfirm(!eyeConfirm);
                }}
              />
            </button>
          </div>
          <ErrorLine error={formik.errors.confirmPassword} />
        </div>
      </div>
      <div className="flex flex-col gap-[10px] w-full">
        <Button type="submit" disabled={!formik.isValid || loading}>
          {loading ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            "Continue"
          )}
        </Button>

        <Button variant="secondary">
          <Link to="/login">Sudah ada akun? Login Yuk!</Link>
        </Button>
      </div>
    </form>
  );
}
