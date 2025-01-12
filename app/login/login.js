"use client";
import styles from "./styles.module.css";
import { use, useEffect, useState } from "react";
import Link from "next/link";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   useEffect(() => {console.log('username:', username); console.log('password:', password)}, [username, password]);

  return (
    <div className={styles.container2}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      ></input>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      ></input>
      <Link href="/userhome">
        <button
          onClick={() => {
            console.log(`Username`, username);
            console.log(`Password`, password);
          }}
        >
          Login
        </button>
      </Link>
    </div>
  );
}
