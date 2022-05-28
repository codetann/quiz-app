import axios from "axios";

interface Trivia {
  category: string;
  difficulty: string;
  amount: number;
  type: string;
}

const api = axios.create({
  baseURL: "https://opentdb.com/api.php",
});

const fetchQuestions = async ({
  category,
  difficulty,
  amount,
  type,
}: Trivia) => {
  const response = await api.get("/", {
    params: {
      amount,
      category,
      difficulty,
      type,
    },
  });

  return response.data.results;
};

export const trivia = { fetchQuestions };
