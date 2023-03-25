import { ButtonGroup, IconButton, Tooltip, Center, Text } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ItemCount = ({ stockProd, stock, setStock }) => {
  const sumar = () => stock <= stockProd -1 ? setStock(stock + 1) : alert("Out of stock") 
  const restar = () => stock > 0 ? setStock(stock - 1) : alert("No stock") 

  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline">
        {stock < 1 ? (
          <Tooltip label="minimum stock reached" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton icon={<MinusIcon />} onClick={restar} />
        )}
        <Center w="125px" h="30px">
          <Text>Stock: {stock}</Text>
        </Center>
        {stock < stock ? (
          <IconButton icon={<AddIcon />} onClick={sumar} />
        ) : (
          <Tooltip label="stock limit reached" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />
          </Tooltip>
        )}
      </ButtonGroup>
    </>
  );
};

export default ItemCount;
