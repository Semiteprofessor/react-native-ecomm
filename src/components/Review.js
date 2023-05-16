/** @format */

import {
  Text,
  View,
  Box,
  Heading,
  VStack,
  FormControl,
  Select,
  CheckIcon,
  TextArea,
} from "native-base";
import React, { useState } from "react";
import Colors from "../colors";
import Rating from "./Rating";
import Messages from "./Notifications/Messages";
import Buttons from "../components/Buttons";

const Review = () => {
  const [ratings, setRatings] = useState("");

  return (
    <Box my={9}>
      <Heading bold fontSize={15}>
        REVIEW
      </Heading>
      {/* If there -is no review */}
      {/* <Messages
          color={Colors.deepGray}
          bg={Colors.main}
          size={10}
          children={"No Review"}
        /> */}

      {/* Review */}
      <Box p={3} bg={Colors.deepestGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          John Doe
        </Heading>
        <Rating value={4} />
        <Text my={2} fontSize={11}>
          Jan 12 2023
        </Text>
        <Messages
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur"
          }
        />
      </Box>
      {/* Write Review */}
      {/* <Box>
          <Heading fontSize={15} bold mb={4} mt={4}>
            REVIEW THIS PRODUCT
          </Heading>
          <VStack space={6}>
            <FormControl>
              <FormControl.Label _text={{ fontSize: "12px", fontWeight: "bold" }}>
                Rating
              </FormControl.Label>
              <Select
                bg={Colors.subGreen}
                borderWidth={0}
                rounded={5}
                py={4}
                placeholder="Choose Rate"
                _selectedItem={{
                  bg: Colors.subGreen,
                  endIcon: <CheckIcon size={5} />,
                }}
                selectedValue={ratings}
                onValueChange={(e) => setRatings(e)}>
                <Select.Item label="1 - Poor" value="1" />
                <Select.Item label="2 - Fair" value="2" />
                <Select.Item label="3 - Good" value="3" />
              </Select>
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{ fontSize: "12px", fontWeight: "bold" }}>
                Comment
              </FormControl.Label>
              <TextArea
                h={24}
                w="full"
                placeholder="This product is good ....."
                borderWidth={0}
                bg={Colors.subGreen}
                py={4}
                _focus={{ bg: Colors.subGreen }}
              />
            </FormControl>
            <Buttons bg={Colors.main} color={Colors.white}>
              SUBMIT
            </Buttons>
  
            <Messages
              color={Colors.white}
              bg={Colors.black}
              children={"Please 'Login' to write a review"}
            />
          </VStack>
        </Box> */}
    </Box>
  );
};

export default Review;
