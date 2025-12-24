import DashboardLayout from "../components/layout/DashboardLayout";
import { Accordion } from "../components/ui/Accordion";
import Button from "../components/ui/Button";
import Grid from "../components/layout/Grid";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
  CardMedia,
} from "../components/ui/Card";

const accordionData = [
  {
    title: "What is this?",
    content: "A reusable accordion component.",
  },
  {
    title: "Is it customizable?",
    content: "Yes. Built for real projects.",
  },
  {
    title: "Can multiple items open?",
    content: "Yes. Controlled by props.",
  },
];

export default function Components() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <Grid cols={9} md={2} sm={1} gap={6}>
          <Card>
            <CardMedia src="https://picsum.photos/300" />
            <CardTitle>Card Title</CardTitle>
            <CardDescription>This is a card component.</CardDescription>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>
        </Grid>
        </div>
        <div className="p-8">
        <Grid cols={9} md={2} sm={1} gap={6}>
          <Card>
            <CardMedia src="https://picsum.photos/300" />
            <CardTitle>Card Title</CardTitle>
            <CardDescription>This is a card component.</CardDescription>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>
        </Grid>
        </div>
        <div className="p-8">
        <Grid cols={9} md={2} sm={1} gap={6}>
          <Card>
            <CardMedia src="https://picsum.photos/300" />
            <CardTitle>Card Title</CardTitle>
            <CardDescription>This is a card component.</CardDescription>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>
        </Grid>
      </div>
    </DashboardLayout>
  );
}
