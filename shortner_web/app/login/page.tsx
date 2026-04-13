"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useGoogleLogin } from "@react-oauth/google"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      setLoading(true)
      const loginToast = toast.loading("Authenticating with Google...")
      try {
        const response = await fetch(`http://localhost:4000/api/v1/auth/google/callback?code=${codeResponse.code}`)
        const data = await response.json()

        if (data.success) {
          localStorage.setItem("token", data.data.token)
          toast.success("Welcome back!", { id: loginToast })
          window.location.href = "/" // Smooth redirect + state refresh
        } else {
          toast.error(data.message || "Google Login failed", { id: loginToast })
        }
      } catch (error) {
        console.error("Google Auth error:", error)
        toast.error("Something went wrong with Google Auth", { id: loginToast })
      } finally {
        setLoading(false)
      }
    },
    flow: 'auth-code',
  })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const loginToast = toast.loading("Verifying credentials...")

    try {
      const response = await fetch("http://localhost:4000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()

      if (data.success) {
        localStorage.setItem("token", data.data.token)
        toast.success("Successfully logged in", { id: loginToast })
        window.location.href = "/" // Smooth redirect + state refresh
      } else {
        toast.error(data.message || "Login failed", { id: loginToast })
      }
    } catch (error) {
      console.error("Login error:", error)
      toast.error("Something went wrong. Check your connection.", { id: loginToast })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl border-primary/10">
          <CardHeader className="space-y-4 text-center pb-8 border-b mb-6">
            <div className="flex justify-center mb-2">
              <Image src="/warpit-logo-new.png" alt="WarpIt" width={60} height={60} className="rounded-2xl" />
            </div>
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
              <p className="text-muted-foreground">Enter your credentials to access your account</p>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  className="h-12 text-base"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="#" className="text-sm font-medium text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  className="h-12 text-base"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full h-12 text-lg font-semibold" disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground font-bold tracking-widest">
                  Or continue with
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              type="button"
              className="w-full h-12 font-bold tracking-tight rounded-xl border-primary/10 hover:bg-primary/5 group"
              onClick={() => handleGoogleLogin()}
              disabled={loading}
            >
              <svg className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
              Google
            </Button>
          </CardContent>


          <CardFooter className="flex flex-col space-y-4 pt-4 border-t">
            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/register" className="font-semibold text-primary hover:underline">
                Create an account
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
