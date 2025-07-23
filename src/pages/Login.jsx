

import { useState } from "react"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", { email, password })
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('src/assets/image.jpg')",
        }}
      />

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Main Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-7xl mx-auto">
          {/* Login Container */}
          <div
            className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden w-full h-auto"
            
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
              {/* Left Side - Login Form */}
              <div className="lg:col-span-2 p-8 lg:p-16 flex flex-col justify-center bg-gray-100/90">
                <div className="max-w-sm mx-auto w-full">
                  {/* Welcome Text */}
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left">
                    Hi, Welcome Back!
                  </h1>

                  {/* Login Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Input */}
                    <div>
                      <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
                        required
                      />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                            />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>

                    {/* Password Links */}
                    <div className="flex justify-between text-sm">
                      <button type="button" className="text-blue- hover:text-blue-600 transition-colors">
                        Reset password?
                      </button>
                      <button type="button" className="text-blue-500 hover:text-blue-600 transition-colors">
                        Forgot password?
                      </button>
                    </div>

                    {/* Login Button */}
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                    >
                      Login
                    </button>
                  </form>

                  {/* Sign Up Link */}
                  <div className="mt-8 text-center text-gray-600">
                    Don't have an account?{" "}
                    <button className="text-blue-500 hover:text-blue-600 font-medium transition-colors">Sign up</button>
                  </div>
                </div>
              </div>

              {/* Right Side - Branding */}
              <div
                className="lg:col-span-3 relative flex flex-col items-center justify-center text-white p-8 lg:p-16 min-h-[500px] lg:min-h-full"
                style={{
                  backgroundColor: "#5576D9",
                  backgroundImage: "url('src/assets/loginbg2.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay",
                }}
              >
                

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-wider">MEXVISA</h2>
                  <div className="space-y-2">
                    <p className="text-xl lg:text-2xl font-light">Welcome to</p>
                    <p className="text-2xl lg:text-3xl font-semibold">MexVisa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
