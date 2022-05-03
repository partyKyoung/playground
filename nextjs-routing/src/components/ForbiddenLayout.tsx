import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  country: string;
  region: string;
  city: string;
  forbidden: boolean;
}

function ForbiddenLayout({
  children,
  country,
  region,
  city,
  forbidden,
}: Props) {
  return (
    <div>
      <div>
        <ul>
          <li>접속한 국가: {country}</li>
          <li>접속한 지역: {region}</li>
          <li>접속한 도시: {city}</li>
        </ul>
      </div>
      {forbidden ? (
        <div>
          <h2>Oops!</h2>
          <p>Service is not available in your region.</p>
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}

export default ForbiddenLayout;
