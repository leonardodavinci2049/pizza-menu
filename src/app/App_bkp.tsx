import { useEffect, useState } from "react";

// Interface para a resposta da API
interface AdviceResponse {
  slip: {
    id: number;
    advice: string;
  };
}

function App(): JSX.Element {
  const [advice, setAdvice] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  async function getAdvice(): Promise<void> {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data: AdviceResponse = await response.json();
      setAdvice(data.slip.advice);
      setCount((c) => c + 1);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <div>
        <h1>{advice}</h1>
        <button onClick={getAdvice}>Get Advice</button>
        <Message count={count} />
      </div>
    </>
  );
}

export default App;

function Message({ count }: MessageProps): JSX.Element  {
  return (
    <p>
      You have read <strong> {count} </strong>pieces of advice
    </p>
  );
}

interface MessageProps {
  count: number;
}
