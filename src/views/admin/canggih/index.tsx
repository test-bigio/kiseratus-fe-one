import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "stores/hooks";
import { getMembers } from "stores/member/member.action";
import MemberTable from "../dataTables/components/MemberTable";

const Canggih = () => {
  const dispatch = useAppDispatch();
  const { members } = useAppSelector((state) => state.member);

  useEffect(() => {
    dispatch(getMembers())
  }, [dispatch])

  console.log('members', members)

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {
        members.length > 0 && (
          <MemberTable tableData={members} />
        )
      }
    </Box>
  );
};

export default Canggih;
