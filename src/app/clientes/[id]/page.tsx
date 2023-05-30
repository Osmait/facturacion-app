import { ClientDetail } from "@/components/clients/ClientDetail";

export default function Orders({ id }: any) {
  return (
    <div>
      <h1>Details{`${id}`}</h1>

      <ClientDetail />
    </div>
  );
}
