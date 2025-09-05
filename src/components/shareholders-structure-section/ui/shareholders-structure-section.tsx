import { useFetchShareholderStructure } from "../model/use-fetch-shareholder-structure";
import { ShareholdersTable } from "./shareholders-table";
import { ShareholdersChart } from "./shareholders-chart";

import "../styles/index.scss";

export const ShareholdersStructureSection = () => {
  const { data, error, isLoading } = useFetchShareholderStructure("SBER");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <section className="shareholder_structure__section">
      <div className="shareholder_structure__card container">
        <h1 className="shareholder_structure__title">Структура акционеров</h1>

        <div className="shareholder_structure__content">
          <ShareholdersTable data={data} />

          <div className="divider" />

          <ShareholdersChart data={data} />
        </div>
      </div>
    </section>
  );
};
