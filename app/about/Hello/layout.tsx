export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <div>Hello Page</div>
          <div>{children}</div>
      </div>
    
      
    );
  }