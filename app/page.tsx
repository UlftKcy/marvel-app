import CharacterList from '@/components/home/CharacterList';
import styles from './page.module.css';
import md5 from "md5";

const privateKey = process.env.API_PRIVATE_KEY;
const publicKey = process.env.API_PUBLIC_KEY;

const generateHash = (ts: string) => {
  return md5(ts + privateKey + publicKey);
}

const fetchCharacters = async () => {
  const ts = Date.now().toString();
  const hash = generateHash(ts);

  const response = await fetch(`${process.env.API_BASE_URL}/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`);

  return response.json();
}

export default async function Home() {
  const characters = await fetchCharacters();

  return (
    <main className={styles.main}>
      <CharacterList {...characters} />
    </main>
  )
}
