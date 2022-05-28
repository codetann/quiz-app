import { useState, useEffect } from "react";
import { trivia } from "@lib";
import { useToast } from "@chakra-ui/react";

interface Trivia {
  category: string;
  difficulty: string;
  amount: number;
  type: string;
}

const useTrivia = (options: Trivia) => {
  const [qustions, setQuestions] = useState<any[]>([]);
  const toast = useToast();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await trivia.fetchQuestions(options);
        setQuestions(data);
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.message,
          status: "error",
          position: "top-right",
          isClosable: true,
        });
      }
    };
    fetch();
  }, [options]);

  return {
    qustions,
  };
};

export { useTrivia };
