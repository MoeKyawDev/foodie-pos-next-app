import BackofficeLayout from "@/components/backofficeLayout";
import ItemCard from "@/components/itemCard/ItemCard";
import CreateMenuCategory from "@/components/menuCategory/CreateMenuCategory";
import { useAppSelector } from "@/store/hooks";
import CategoryIcon from "@mui/icons-material/Category";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const MenuCategoryPage = () => {
  const menuCategories = useAppSelector((store) => store.menuCategory.items);
  const [open, setOpen] = useState<boolean>(false);
  return (
    <BackofficeLayout>
      <Box sx={{ mr: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {/* button to show CreateMenu's Dialog */}
          <Button variant="contained" onClick={() => setOpen(true)}>
            Create menu category
          </Button>
        </Box>

        {/* render CreateMenuCategory Component */}
        <CreateMenuCategory open={open} setOpen={setOpen} />

        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {/* display menu with MenuCard */}
          {menuCategories.map((menuCategory) => (
            <ItemCard
              href={`/backoffice/menu-category/${menuCategory.id}`}
              icon={<CategoryIcon />}
              key={menuCategory.id}
              title={menuCategory.name}
            />
          ))}
        </Box>
      </Box>
    </BackofficeLayout>
  );
};

export default MenuCategoryPage;
