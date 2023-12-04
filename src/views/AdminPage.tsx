import Button from "../components/Button";
import InputForm from "../components/InputForm";

export default function AdminPage() {
  return (
    <section>
      <h1 className="my-4 text-center text-3xl font-bold">Admin page</h1>
      <div className="mx-auto my-5 flex w-2/3 items-center justify-center self-center">
        <form>
          <InputForm
            label="Title"
            htmlFor="title"
            type="text"
            placeholder="Enter title"
            onChange={() => {}}
          />
          <InputForm
            label="Category"
            htmlFor="category"
            type="text"
            placeholder="Enter category"
            onChange={() => {}}
          />

          <Button alt="" text="Create Product" onClick={() => {}} />
        </form>
      </div>
    </section>
  );
}
