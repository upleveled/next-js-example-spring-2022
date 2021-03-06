import Head from 'next/head';
import Image from 'next/image';
import { getAnimalById } from '../../../util/database';

export default function Animal(props) {
  if (!props.animal) {
    return (
      <div>
        <Head>
          <title>Animal not found</title>
          <meta
            name="description"
            content="Unfortunately, we have had trouble locating the animal you are looking for. Better luck next time."
          />
        </Head>

        <h1>Animal not found</h1>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>
          {props.animal.firstName}, the {props.animal.type}
        </title>
        <meta
          name="description"
          content={`${props.animal.firstName} is a ${props.animal.type} with a ${props.animal.accessory}`}
        />
      </Head>

      <h1>{props.animal.firstName}</h1>

      <div>
        <div>
          <div>
            <Image src={`/${props.animal.id}.jpeg`} width="400" height="300" />
          </div>
          <div>id: {props.animal.id}</div>
          <div>accessory: {props.animal.accessory}</div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const animal = await getAnimalById(context.query.animalId);

  return {
    props: {
      animal: animal,
    },
  };
}
