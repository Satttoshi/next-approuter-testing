import Basic from '@/app/components/Basic';
import Clock from '@/app/components/Clock';
import Async from '@/app/components/Async';
import Client from '@/app/components/Client';
import ClientWithServerData from '@/app/components/ClientWithServerData';
import { Suspense } from 'react';
import Navigation from '@/app/components/Navigation';

export default function Home() {
  return (
    <main>
      <Suspense>
        <Navigation />
        <Clock label="Clock" />
        <Basic label="Basic" />
        <Client label="Client" />
        <ClientWithServerData label="Client with server data" />
        <Async label="Async" />
      </Suspense>
    </main>
  );
}
