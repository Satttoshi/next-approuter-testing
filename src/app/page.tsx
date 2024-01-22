import Basic from '@/app/components/Basic';
import Clock from '@/app/components/Clock';
import Async from '@/app/components/Async';
import Client from '@/app/components/Client';
import ClientWithServerData from '@/app/components/ClientWithServerData';
import Dynamic from '@/app/components/Dynamic';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      <Suspense>
        <Clock label="Clock" />
        <Basic label="Basic" />
        <Client label="Client" />
        <ClientWithServerData label="Client with server data" />
        <Async label="Async" />
      </Suspense>
    </main>
  );
}
