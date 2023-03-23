import SortableTree, { addNodeUnderParent, removeNodeAtPath} from '@nosferatu500/react-sortable-tree';
import { useState } from 'react';
import 'react-sortable-tree/style.css';
import { Box, SimpleGrid, Button } from "@chakra-ui/react";
import {v4 as uuidv4} from "uuid";

const SilsilahKeluarga = () => {
  const [treeData, setTreeData] = useState<any>(JSON.parse(localStorage.getItem("silsilah") || "[]"))

  const getNodeKey = ({ treeIndex }: any) => treeIndex;

  const handleChange = (treeData: any) => {
    setTreeData(treeData)
    localStorage.setItem("silsilah", JSON.stringify(treeData));
  }

  function handleTitleChange(node: any, title: string) {
    const { id } = node;
    const newTreeData = treeData.map((n: any) => {
      if (n.id === id) {
        return { ...n, title };
      } else if (n.children) {
        return { ...n, children: updateChildTitle(n.children, id, title) };
      }
      return n;
    });
    
    handleChange(newTreeData)
  }

  function updateChildTitle(children: any, id: any, title: any) {
    return children.map((child: any) => {
      if (child.id === id) {
        return { ...child, title };
      } else if (child.children) {
        return { ...child, children: updateChildTitle(child.children, id, title) };
      }
      return child;
    });
  }

  const [searchString, setSearchString] = useState('')
  const [searchFocusIndex, setSearchFocusIndex] = useState(0)
  const [searchFoundCount, setSearchFoundCount] = useState(null)

  const customSearchMethod = ({ node, searchQuery }: any) =>
      searchQuery &&
      node.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
  
  const selectPrevMatch = () =>
      setSearchFocusIndex(
        searchFocusIndex !== null
          ? (searchFoundCount + searchFocusIndex - 1) % searchFoundCount
          : searchFoundCount - 1)

  const selectNextMatch = () =>
      setSearchFocusIndex(
        searchFocusIndex !== null
          ? (searchFocusIndex + 1) % searchFoundCount
          : 0)

  return (
    <>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid
          mb="20px"
          columns={1}
          spacing={{ base: "20px", xl: "20px" }}
        >
          <Button
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            width={"36"}
            onClick={() => handleChange(treeData.concat({id: uuidv4(), title: "New Parent"}))}
          >
            Tambah Parent
          </Button>

          <div>
            <form
            style={{ display: 'inline-block' }}
            onSubmit={event => {
              event.preventDefault();
            }}
            >
              <input
                id="find-box"
                type="text"
                placeholder="Search..."
                value={searchString}
                onChange={event =>
                  setSearchString(event.target.value)
                }
                style={{border: "1px solid #ccc", borderRadius: "3px", height: "30px", width: "250px", marginRight: "10px", fontSize: '1rem', padding: "5px"}}
              />

              <button
                type="button"
                disabled={!searchFoundCount}
                onClick={selectPrevMatch}
                style={{padding: "3px 15px", backgroundColor: "#cbd5e1", borderRadius: "3px"}}
              >
                &lt;
              </button>

              <button
                type="submit"
                disabled={!searchFoundCount}
                onClick={selectNextMatch}
                style={{padding: "3px 15px", backgroundColor: "#cbd5e1", borderRadius: "3px", marginLeft: "5px"}}
              >
                &gt;
              </button>

              <span
                style={{marginLeft: "5px"}}
              >
                &nbsp;
                {searchFoundCount > 0 ? searchFocusIndex + 1 : 0}
                &nbsp;/&nbsp;
                {searchFoundCount || 0}
              </span>
            </form>
          </div>

          <div style={{ height: '600px' }}>
            <SortableTree
              treeData={treeData}
              onChange={handleChange}
              searchMethod={customSearchMethod}
              searchQuery={searchString}
              searchFocusOffset={searchFocusIndex}
              searchFinishCallback={matches => {
                setSearchFoundCount(matches.length)
                setSearchFocusIndex(matches.length > 0 ? searchFocusIndex % matches.length : 0)
              }}
              generateNodeProps={({ node, path }) => ({
                title: (
                  <input
                    value={node.title}
                    onChange={(event) => handleTitleChange(node, event.target.value)}
                  />
                ),
                buttons: [
                  <button
                    onClick={() =>
                      handleChange(
                        addNodeUnderParent({
                          treeData: treeData,
                          parentKey: path[path.length - 1],
                          expandParent: true,
                          getNodeKey,
                          newNode: {
                            id: uuidv4(),
                            title: "New Child",
                          },
                          addAsFirstChild: false,
                        }).treeData
                      )
                    }
                  >
                    Add Child
                  </button>,
                  <button
                    style={{marginLeft: "10px"}}
                    onClick={() =>
                      handleChange(
                        removeNodeAtPath({
                          treeData: treeData,
                          path,
                          getNodeKey,
                        })
                      )
                    }
                  >
                    Remove
                  </button>,
                ],
              })}
            />
          </div>
        </SimpleGrid>
      </Box>
    </>
  )
}

export default SilsilahKeluarga;