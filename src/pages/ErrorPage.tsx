import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div id="error-page" className="flex justify-center">
      <div className="py-3 text-center">
        <h1>Oops!</h1>
        <div className="py-3">
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.message}</i>
          </p>
        </div>
      </div>
    </div>
  );
}
