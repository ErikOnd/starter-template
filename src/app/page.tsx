import { Button } from "@/components/ui/button";
import Headline from "@/components/ui/headline";
import Text from "@/components/ui/text";
import Container from "@/components/ui/container";

export default function Home() {
    return (
        <Container className="mt-28 flex w-full max-w-5xl justify-center">
            <Headline as="h1">Next.js Starter Template</Headline>
            <Text>
                This is a Next.js starter template pre-configured with ESLint, Prettier, Tailwind, Shadcn, and a
                selection of basic components.
            </Text>
            <Button>Click me</Button>
        </Container>
    );
}
