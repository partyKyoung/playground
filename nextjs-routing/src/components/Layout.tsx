import Link from "next/link";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="root">
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/page1">
                <a>한국인만 접근 가능한 페이지</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/page2">
                <a>한국인은 접근 불가능한 페이지</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
