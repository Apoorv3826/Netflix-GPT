import { useRef, useState } from "react";
import { CheckValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [IsSignIn, setIsSignIn] = useState(true);
  const [message, setMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleToggle = () => {
    setIsSignIn(!IsSignIn);
    setMessage(null);
  };

  const handleSubmit = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const validationMessage = CheckValidation(emailValue, passwordValue);
    setMessage(validationMessage);

    if (validationMessage) return;

    if (!IsSignIn) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          console.log("User registered:", userCredential.user);
          setMessage("User registered successfully!");
        })
        .catch((error) => {
          setMessage(`${error.message} (${error.code})`);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          console.log("User signed in:", userCredential.user);
          setMessage("User signed in successfully!");
        })
        .catch((error) => {
          setMessage(`${error.message} (${error.code})`);
        });
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={BG_URL}
          alt="Background"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-black/75 p-8 md:p-12 rounded-lg shadow-xl backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            {IsSignIn ? "Sign In" : "Sign Up"}
          </h2>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            {!IsSignIn && (
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
                />
              </div>
            )}

            <div>
              <input
                type="email"
                ref={email}
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
              />
            </div>

            <div>
              <input
                type="password"
                ref={password}
                placeholder="Password"
                className="w-full px-4 py-3 rounded bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
              />
            </div>

            {message && (
              <div className="py-2">
                <p className="text-red-500 text-sm">{message}</p>
              </div>
            )}

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full py-3 rounded bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors duration-300"
            >
              {IsSignIn ? "Sign In" : "Sign Up"}
            </button>

            <p
              className="text-gray-400 text-center hover:text-white transition-colors cursor-pointer"
              onClick={handleToggle}
            >
              {IsSignIn
                ? "New to Netflix? Sign up now"
                : "Already have an account? Sign in"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
