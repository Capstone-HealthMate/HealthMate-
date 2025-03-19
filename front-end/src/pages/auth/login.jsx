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
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await fetch(`${baseUrl}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(values),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error);
        toast.success(data.message);
        navigate("/");
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 lg:px-20">
      <div className="w-full max-w-fit space-y-6 bg-white rounded-lg p-8">
        <Heading className="text-2xl font-semibold ">Login</Heading>
        <Paragraph className="text-gray-500">
          Masukkan email dan password yang telah terdaftar.
        </Paragraph>
        <form onSubmit={formik.handleSubmit} className="space-y-5">
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
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Lupa Password?
            </Link>
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={!formik.isValid || loading}
          >
            {loading ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              "Masuk"
            )}
          </Button>
        </form>
        <div className="text-center text-sm text-gray-500">
          Belum punya akun?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Daftar
          </Link>
        </div>
      </div>
    </div>
  );
}
