import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'

import ButtonLoading from '@/components/buttons/Loading'

export default function CompsLayoutsNavbar() {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ zIndex: 999 }}>
      <Container>
        <Navbar.Brand as={Link} href="/">
          <a className="navbar-brand">Home</a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/worldcup2022"><a className="nav-link">World Cup 2022</a></Nav.Link>
            <Nav.Link as={Link} href="/tournaments"><a className="nav-link">Tounrnaments</a></Nav.Link>
          </Nav>
          {
            router.pathname !== '/auth/signin' && (
              <Nav className="ms-auto">
                {
                  session ? (
                    <>
                      <span className="text-white">{session.user.name}</span>
                      <Button onClick={() => signOut()}>Sign Out</Button>

                    </>
                  ) : (
                    <ButtonLoading handleClick={() => signIn()} text="Sign In" />
                  )
                }
              </Nav>
            )
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
