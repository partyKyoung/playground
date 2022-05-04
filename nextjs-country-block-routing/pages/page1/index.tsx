import ForbiddenLayout from "../../src/components/ForbiddenLayout";

interface Props {
  country: string;
  region: string;
  city: string;
  forbidden: boolean;
  header: string;
}

export async function getServerSideProps() {
  try {
    const res = await fetch(
      `https://d1ompw9we4y9ub.cloudfront.net/api/country`
    );

    const data = await res.json();

    return {
      props: {
        country: data.country,
        region: data.region,
        city: data.city,
        forbidden: data.country !== "KR",
      },
    };
  } catch (e) {
    console.error({ e });
    return {
      props: {
        country: "",
        region: "",
        city: "",
        forbidden: true,
      },
    };
  }
}

function Page1({ country, region, city, forbidden, header }: Props) {
  return (
    <ForbiddenLayout
      country={country}
      region={region}
      city={city}
      forbidden={forbidden}
    >
      <div>
        <img src="/test.jpg" />
      </div>
    </ForbiddenLayout>
  );
}

export default Page1;
