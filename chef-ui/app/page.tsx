import type { NextPage } from 'next';
import Head from 'next/head';
import Dashboard from '@/app/pages/dashboard';
import RecipeDiscoveryUI from './pages/recipe_discovery';
import SignUpPage from './pages/signup_page';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>African Cuisine NFT Marketplace</title>
        <meta name="description" content="Explore and order unique African cuisine recipes as NFTs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to African Cuisine NFT Marketplace</h1>
        {/* <Dashboard />  */}
        {/* <RecipeDiscoveryUI/> */}
        <SignUpPage/>
      </main>
    </div>
  );
};

export default Home;