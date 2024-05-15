import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";

import { PostProps } from "@/models/Props";
import { notFound } from "next/navigation";
import Box from "@mui/material/Box";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default async function Post({ id, content, title }: PostProps) {
  if (!id) return notFound();
  let image: StaticImport | undefined = undefined;

  try {
    image = await import("../content/images/" + id + ".png");
  } catch (error) {}

  return (
    <CardActionArea component="a" href={`/post/${id}`}>
      <Card sx={{ display: "flex" }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {title}
          </Typography>
          {image ? (
            <Box sx={{ borderRadius: "30px", padding: "20px" }}>
              <Image width={300} height={300} src={image} alt={title} />
            </Box>
          ) : null}
          <Box
            display="block"
            color="primary"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
