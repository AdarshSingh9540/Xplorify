import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [imageUrls, setImageUrls] = React.useState([]);
  const [currentImageUrl, setCurrentImageUrl] = React.useState('');

  React.useEffect(() => {
    fetch('http://localhost:3001/uploaded-images')
      .then(response => response.json())
      .then(data => {
        setImageUrls(data.uploadedImageUrls);
        if (data.uploadedImageUrls && data.uploadedImageUrls.length > 0) {
          setCurrentImageUrl(data.uploadedImageUrls[1]); 
        }
      })
      .catch(error => console.error('Error fetching image URLs:', error));
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={currentImageUrl}
        alt="Wallpaper"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {imageUrls.length > 1 && (
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        )}
      </CardActions>
      {imageUrls.length > 1 && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        </Collapse>
      )}
    </Card>
  );
}
