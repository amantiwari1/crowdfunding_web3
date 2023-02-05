import {
  Badge,
  Button,
  Card,
  Grid,
  Group,
  Image,
  Loader,
  Text,
} from "@mantine/core";
import { useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import DisplayCampaigns from "../components/DisplayCampaigns";
import { useAppState } from "../context";

const Home = () => {
  const { contract } = useAppState();
  const { data, isLoading } = useContractRead(contract, "getCampaigns");

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Grid>
          {data.map((item: any, i: number) => {
            return <DisplayCampaigns key={i} {...item} />;
          })}
        </Grid>
      )}
    </div>
  );
};

export default Home;
