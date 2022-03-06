import { GetStaticProps } from "next";
import api from "../config/api";

interface EpisodesProps {
  id: string;
  title: string;
  members: string;
  published_at: string;
  thumbnail: string;
  description: string;
  file: {
    url: string;
    type: string;
    duration: number;
  };
}

interface HomeProps {
  episodes: EpisodesProps[];
}

export default function Home({ episodes }: HomeProps) {
  return <div></div>;
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("/episodes");
  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, // 8 hours
  };
};
