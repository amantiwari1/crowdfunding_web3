import { Grid, Card, Group, Button, Image, Text } from "@mantine/core";
import { ethers } from "ethers";
import React from "react";

export interface DisplayCampaignsProps {
  title: string;
  description: string;
  image: string;
  target: ethers.BigNumber;
  deadline: ethers.BigNumber;
  amountCollected: ethers.BigNumber;
  owner: string;
}

const DisplayCampaigns = (item: DisplayCampaignsProps) => {
  return (
    <Grid.Col sm={6} md={4}>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={item.image} height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{item.title}</Text>
          <Text weight={500}>
            ETH {ethers.utils.formatEther(item.target.toString())}
          </Text>
        </Group>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>End Date :</Text>
          <Text weight={500}>
            {new Date(item.deadline.toNumber()).toDateString()}
          </Text>
        </Group>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}> Total collected amount:</Text>
          <Text weight={500}>
            ETH {ethers.utils.formatEther(item.amountCollected.toString())}
          </Text>
        </Group>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}> Owner by </Text>
          <Text weight={500}>{item.owner.substring(0, 10)}...</Text>
        </Group>

        <Text size="sm" color="dimmed">
          {item.description}
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Donate
        </Button>
      </Card>
    </Grid.Col>
  );
};

export default DisplayCampaigns;
