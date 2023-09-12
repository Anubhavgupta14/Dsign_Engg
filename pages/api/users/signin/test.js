import { useRouter } from "next/router";

const YourPage = ({ cookies }) => {
  const router = useRouter();
  const jwt = cookies.JWT;

  if (jwt) {
    // Redirect to the dashboard page
    router.push('/components/Dashboard/dashboard');
    return null; // Important: Return null to prevent rendering content on this page
  }

  // If no JWT token is found, continue rendering the page
  return (
    <div>
      <p>Your page content here</p>
    </div>
  );
};

export async function getServerSideProps({ req }) {
  const cookies = req.headers.cookie || ""; // Get cookies from request headers

  return {
    props: { cookies },
  };
}

export default YourPage;
