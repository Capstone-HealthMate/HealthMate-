import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { toast } from "sonner";
import baseUrl from "../../utils/config";
import Button from "../../components/atom/button";
import Heading from "../../components/atom/heading";
import Input from "../../components/atom/input";
import Label from "../../components/atom/label";
import Paragraph from "../../components/atom/paragraph";
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
    try {
      const response = await fetch(`${baseUrl}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      toast.success(data.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 lg:px-20">
      <div className="w-full max-w-md space-y-6 bg-white rounded-lg p-8 ">
        <Heading className="text-2xl font-semibold">Register</Heading>
        <Paragraph className="text-gray-500">
          Masukkan email dan password untuk pendaftaran.
        </Paragraph>
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <Label>Username</Label>
            <Input
              type="text"
              name="username"
              placeholder="Masukkan Username"
              {...formik.getFieldProps("username")}
            />
            <ErrorLine
              error={formik.touched.username && formik.errors.username}
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Masukkan Email"
              {...formik.getFieldProps("email")}
            />
            <ErrorLine error={formik.touched.email && formik.errors.email} />
          </div>
          <div>
            <Label>Password</Label>
            <div className="relative">
              <Input
                type={eyePassword ? "text" : "password"}
                name="password"
                placeholder="Masukkan Password"
                {...formik.getFieldProps("password")}
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                onClick={() => setEyePassword(!eyePassword)}
              >
                <img src="/eye.svg" alt="Toggle visibility" />
              </button>
            </div>
            <ErrorLine
              error={formik.touched.password && formik.errors.password}
            />
          </div>
          <div>
            <Label>Confirm Password</Label>
            <div className="relative">
              <Input
                type={eyeConfirm ? "text" : "password"}
                name="confirmPassword"
                placeholder="Konfirmasi Password"
                {...formik.getFieldProps("confirmPassword")}
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                onClick={() => setEyeConfirm(!eyeConfirm)}
              >
                <img src="/eye.svg" alt="Toggle visibility" />
              </button>
            </div>
            <ErrorLine
              error={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={!formik.isValid || loading}
          >
            {loading ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              "Daftar"
            )}
          </Button>
        </form>
        <div className="text-center text-sm text-gray-500">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Masuk
          </Link>
        </div>
      </div>
    </div>
  );
}
