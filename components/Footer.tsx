export default function Footer() {
  return (
    <footer className="border-t border-accent/40 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 text-sm text-secondary">
        <p>
          © {new Date().getFullYear()} New Song Church. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
