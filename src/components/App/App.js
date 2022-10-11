import { EventBoard } from '../EventBoard/EventBoard';
import { PageTitle } from '../PageTitle/PageTitle';
import upcomingEvents from '../../upcoming-events.json';
import { Container } from './App.styled';
import { HiArchive, HiArrowCircleUp, HiBriefcase } from 'react-icons/hi';
import { Button } from '../Button/Button';
import { Box } from '../Box';

export const App = () => {
  return (
    <Box m={4} border="normal" borderColor="red" position="relative" as="main">
      <Container>
        <PageTitle text="24th Core Worlds Coalition Conference" />
        <EventBoard events={upcomingEvents} />
      </Container>
      <Box
        bg="primaryText"
        p={4}
        display="flex"
        justifyContent="center"
        border="normal"
        borderColor="red"
        position="relative"
        as="section"
      >
        <Button icon={HiArchive}>Search</Button>
        <Button icon={HiArrowCircleUp}>Filter</Button>
        <Button icon={HiBriefcase} type="submit">
          LogIn
        </Button>
        <Button type="submit" disabled>
          LogIn
        </Button>
      </Box>
    </Box>
  );
};
