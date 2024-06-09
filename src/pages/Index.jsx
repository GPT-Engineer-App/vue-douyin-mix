import { useState } from "react";
import { Box, Container, VStack, HStack, Text, IconButton, Image, AspectRatio } from "@chakra-ui/react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

const videos = [
  {
    id: 1,
    user: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNzk1NDI3MHww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    videoUrl: "https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYW1wbGUlMjB2aWRlb3xlbnwwfHx8fDE3MTc5NTQyNzF8MA&ixlib=rb-4.0.3&q=80&w=1080",
    likes: 120,
    comments: 45,
    shares: 30,
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNzk1NDI3MHww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    videoUrl: "https://images.unsplash.com/photo-1459184070881-58235578f004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxzYW1wbGUlMjB2aWRlb3xlbnwwfHx8fDE3MTc5NTQyNzF8MA&ixlib=rb-4.0.3&q=80&w=1080",
    likes: 200,
    comments: 60,
    shares: 50,
  },
];

const VideoCard = ({ video }) => {
  const [likes, setLikes] = useState(video.likes);
  const [comments, setComments] = useState(video.comments);
  const [shares, setShares] = useState(video.shares);

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb={4}>
      <AspectRatio ratio={9 / 16}>
        <video src={video.videoUrl} controls />
      </AspectRatio>
      <HStack p={4} spacing={4} alignItems="center">
        <Image borderRadius="full" boxSize="40px" src={video.user.avatar} alt={video.user.name} />
        <Text fontWeight="bold">{video.user.name}</Text>
      </HStack>
      <HStack p={4} spacing={4} justifyContent="space-between">
        <IconButton aria-label="Like" icon={<FaHeart />} onClick={() => setLikes(likes + 1)} />
        <Text>{likes}</Text>
        <IconButton aria-label="Comment" icon={<FaComment />} onClick={() => setComments(comments + 1)} />
        <Text>{comments}</Text>
        <IconButton aria-label="Share" icon={<FaShare />} onClick={() => setShares(shares + 1)} />
        <Text>{shares}</Text>
      </HStack>
    </Box>
  );
};

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
