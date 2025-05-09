import Header from './components/header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

    </section>
  );
} 