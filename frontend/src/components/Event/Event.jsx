import React from 'react'
import {Card, Image, Text, Theme } from "@chakra-ui/react"
import { Field, Input,Stack, HStack } from "@chakra-ui/react"
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../../components/ui/menu"
import Button from 'react-bootstrap/Button';

const Event = () => {
  return (
    <>
    <body class="bg-gray-200 w-100 p-4">
  <div class="max-w-7xl mx-auto">
   <div class="flex justify-between items-center mb-4">
    <div class="flex items-center bg-gray-300 rounded-full px-4 py-2 w-1/2">
     <input class="bg-gray-300 outline-none w-full" placeholder="Search Here" type="text"/>
     <i class="fas fa-search text-gray-600">
     </i>
    </div>
      <MenuRoot>
      <MenuTrigger asChild>
          <Button p="4" variant="secondary" size='lg'>
          Events<i class="fas fa-caret-down ml-1"></i>
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="new-txt">Shopping</MenuItem>
        <MenuItem value="new-file">Movies</MenuItem>
        <MenuItem value="new-win">Outings</MenuItem>
        <MenuItem value="new-win">HangOut</MenuItem>
      </MenuContent>
    </MenuRoot>
   </div>
   <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

    <Card.Root width="320px" variant="elevated" key="elevated" >
    <Theme appearance='light'>
            <Card.Body gap="3" >
              <HStack mb="6" gap="3">
              <img 
                  src={"/default-profile.png"||"/default-profile.png" } // Fallback to placeholder if no profilePicture
                  alt="Profile" 
                  // className="profile-pic"
                  style={{
              width: "6rem",
              height: "6rem",
              borderRadius: "50%", // Make it round
              objectFit: "cover",
              backgroundColor: "transparent" // Ensure no black background
            }}/> 
              <Card.Title mb="1">Gautami</Card.Title>
              </HStack>
              <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </Card.Description>
              <Text textStyle="s" fontWeight="medium">
          Event: Shopping
          <br/>
          Date: 4/2/25
          <br/>
          No. Of person: 3
        </Text>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="success"> Chat </Button>
              <Button variant="outline-primary">Request</Button>
            </Card.Footer>
          </Theme>
    </Card.Root>
    <Card.Root width="320px" variant="elevated" key="elevated" >
    <Theme appearance='light'>
            <Card.Body gap="3" >
              <HStack mb="6" gap="3">
              <img 
                  src={"/default-profile.png"|| "/default-profile.png"} // Fallback to placeholder if no profilePicture
                  alt="Profile" 
                  // className="profile-pic"
                  style={{
              width: "6rem",
              height: "6rem",
              borderRadius: "50%", // Make it round
              objectFit: "cover",
              backgroundColor: "transparent" // Ensure no black background
            }}/> 
              <Card.Title mb="1">Gautami</Card.Title>
              </HStack>
              <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </Card.Description>
              <Text textStyle="s" fontWeight="medium">
          Event: Shopping
          <br/>
          Date: 4/2/25
          <br/>
          No. Of person: 3
        </Text>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="success"> Chat </Button>
              <Button variant="outline-primary">Request</Button>
            </Card.Footer>
          </Theme>
    </Card.Root>
    <Card.Root width="320px" variant="elevated" key="elevated" >
    <Theme appearance='light'>
            <Card.Body gap="3" >
              <HStack mb="6" gap="3">
              <img 
                  src={"/default-profile.png"|| "/default-profile.png"} // Fallback to placeholder if no profilePicture
                  alt="Profile" 
                  // className="profile-pic"
                  style={{
              width: "6rem",
              height: "6rem",
              borderRadius: "50%", // Make it round
              objectFit: "cover",
              backgroundColor: "transparent" // Ensure no black background
            }}/> 
              <Card.Title mb="1">Gautami</Card.Title>
              </HStack>
              <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </Card.Description>
              <Text textStyle="s" fontWeight="medium">
          Event: Shopping
          <br/>
          Date: 4/2/25
          <br/>
          No. Of person: 3
        </Text>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="success"> Chat </Button>
              <Button variant="outline-primary">Request</Button>
            </Card.Footer>
          </Theme>
    </Card.Root>
    <Card.Root width="320px" variant="elevated" key="elevated" >
    <Theme appearance='light'>
            <Card.Body gap="3" >
              <HStack mb="6" gap="3">
              <img 
                  src={"/default-profile.png"|| "/default-profile.png"} // Fallback to placeholder if no profilePicture
                  alt="Profile" 
                  // className="profile-pic"
                  style={{
              width: "6rem",
              height: "6rem",
              borderRadius: "50%", // Make it round
              objectFit: "cover",
              backgroundColor: "transparent" // Ensure no black background
            }}/> 
              <Card.Title mb="1">Gautami</Card.Title>
              </HStack>
              <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </Card.Description>
              <Text textStyle="s" fontWeight="medium">
          Event: Shopping
          <br/>
          Date: 4/2/25
          <br/>
          No. Of person: 3
        </Text>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="success"> Chat </Button>
              <Button variant="outline-primary">Request</Button>
            </Card.Footer>
          </Theme>
    </Card.Root>
    <Card.Root width="320px" variant="elevated" key="elevated" >
    <Theme appearance='light'>
            <Card.Body gap="3" >
              <HStack mb="6" gap="3">
              <img 
                  src={"/default-profile.png"|| "/default-profile.png"} // Fallback to placeholder if no profilePicture
                  alt="Profile" 
                  // className="profile-pic"
                  style={{
              width: "6rem",
              height: "6rem",
              borderRadius: "50%", // Make it round
              objectFit: "cover",
              backgroundColor: "transparent" // Ensure no black background
            }}/> 
              <Card.Title mb="1">Gautami</Card.Title>
              </HStack>
              <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </Card.Description>
              <Text textStyle="s" fontWeight="medium">
          Event: Shopping
          <br/>
          Date: 4/2/25
          <br/>
          No. Of person: 3
        </Text>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="success"> Chat </Button>
              <Button variant="outline-primary">Request</Button>
            </Card.Footer>
          </Theme>
    </Card.Root>
    
          <div class="flex items-center justify-center bg-white p-4 rounded-lg shadow-md border-dashed border-2 border-gray-300 w-[318px] h-[400px]">
          <Button variant="secondary" className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: "70px", height: "70px" }}>
            <i class="fas fa-plus text-4xl text-gray-200"></i>
          </Button>
          </div>

    <Theme appearance='light' width="310px">
  <Card.Root width="310px">
    <Card.Header>
      <Card.Title>Create an Event</Card.Title>
    </Card.Header>
    <Card.Body>
      <Stack gap="2" w="full">
        <Field.Root>
          <Field.Label>Event: 
            <Field.RequiredIndicator />
          </Field.Label>
          <Input placeholder=" Any event" variant="subtle" size="md" />
        </Field.Root>
        <Field.Root>
          <Field.Label>Date:</Field.Label>
          <Input placeholder=" dd/mm/yyyy" variant="subtle" size="md" />
        </Field.Root>
        <Field.Root>
          <Field.Label>No. Of person:</Field.Label>
          <Input placeholder=" number required" variant="subtle" size="md" />
        </Field.Root>
      </Stack>
    </Card.Body>
    <Card.Footer justifyContent="flex-end">
      <Button variant="outline-danger">Cancel</Button>
      <Button variant="success">Create</Button>
    </Card.Footer>
  </Card.Root>
    </Theme>
      
  </div>
  </div>
 </body>

 
    </>
  )
}

export default Event