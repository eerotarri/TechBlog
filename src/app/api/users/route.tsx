import type { NextApiRequest, NextApiResponse } from "next";
import users from "@/content/users.json";
import fs from "fs";
import { UserProps } from "@/models/Props";
import { CONTENT_PATH } from "@/lib/paths";
import { NextResponse } from "next/server";
import { encryptPassword } from "@/lib/authUtils";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  const userList: UserProps[] = users;

  if (req.body) {
    const { username, password } = await req.json();

    if (userList.find((user) => user.name === username)) {
      return NextResponse.json({ status: 400, message: "User already exists" });
    }

    if (username && password) {
      const newUser = {
        id: randomUUID(),
        name: username,
        email: "",
        image: "",
        ...encryptPassword(password),
      };

      userList.push(newUser);
      console.log(CONTENT_PATH + "users.json");

      fs.writeFileSync(CONTENT_PATH + "users.json", JSON.stringify(userList));
    }

    return NextResponse.json({
      status: 200,
      message: "User successfully created",
    });
  }
}
