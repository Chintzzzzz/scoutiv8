export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <div>About Page</div>
          <div>{children}</div>
      </div>
    
      
    );
  }