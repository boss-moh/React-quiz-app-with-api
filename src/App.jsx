import { useState } from "react";
import { Button, Download, Error, FormLayout, Result } from "./components";
import { basicData, fromat } from "./Data";
import { useFetch } from "./hooks";
import "./index.css";
import { MainLayout } from "./Layout/MainLayout";
export const App = () => {
  const [URL, setURl] = useState("");
  const [result, setResult] = useState(null);
  let [loading, error, data] = useFetch(URL);

  function APIContent(answers) {
    let url = `https://the-trivia-api.com/api/questions?categories=${answers[0]}&limit=${answers[2]}&difficulty=${answers[1]}`;
    setURl(url);
  }

  function handleResult(answers) {
    let temp = fromat(data).filter(
      (item, index) => item.correctAnswer === answers[index]
    );
    setResult(temp.length + "");
  }

  function handleTryAgain() {
    setResult(null);
  }

  return (
    <MainLayout>
      {URL == "" ? (
        <FormLayout
          onSubmit={APIContent}
          data={basicData}
        />
      ) : (
        <>
          {loading ? (
            <Download />
          ) : error ? (
            <Error />
          ) : result ? (
            <Result
              total={data.length}
              result={result}>
              <p>your result is {result}</p>
              <Button
                className="border-2 border-blue-500 rounded-md px-4 py-1.5 mt-4 w-full text-white capitalize  text-base hover:bg-blue-500 transition-all "
                onClick={handleTryAgain}>
                try Again
              </Button>
            </Result>
          ) : (
            <FormLayout
              data={fromat(data)}
              onSubmit={handleResult}
            />
          )}
        </>
      )}
    </MainLayout>
  );
};

export default App;
