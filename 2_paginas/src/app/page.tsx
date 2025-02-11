import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* aula 1 - navegação */}
      <h1>Oi igor</h1>
      <Link href="/sobre"> Sobre</Link>
      {/* Aula 2 - rotas dinamicas */}
      <h1>Acessar posts</h1>
      <Link href="/posts">Posts</Link>
      {/* Aula 3 - parâmetros na URL */}
      <h1>Acesso a pagina com parametros</h1>
      <Link href={"/exemplo?parametro/teste"}>Página com parâmetros</Link>
    </main>
  );
}
