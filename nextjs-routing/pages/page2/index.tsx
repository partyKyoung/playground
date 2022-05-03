import type { GetServerSidePropsContext } from "next";

import ForbiddenLayout from "../../src/components/ForbiddenLayout";

interface Props {
  country: string;
  region: string;
  city: string;
  forbidden: boolean;
}

export const getServerSideProps = ({ query }: GetServerSidePropsContext) => ({
  props: {
    country: query.country,
    region: query.region,
    city: query.city,
    forbidden: query.country !== "KR",
  },
});

function Page2({ country, region, city, forbidden }: Props) {
  return (
    <ForbiddenLayout
      country={country}
      region={region}
      city={city}
      forbidden={forbidden}
    >
      <div>
        <img src="/test2.jpeg" />
      </div>
    </ForbiddenLayout>
  );
}

export default Page2;
