import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormField from "./FormField";
import Loader from "./Loader";
import { getAllPosts } from "../Redux/Actions/postAction";
import Card from "./Card";
function Home() {

  const [searchText, setSearchText] = useState("");
  const { posts } = useSelector((state) => state.postReducer);
  console.log(posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Community Showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Browse through a collection of imaginative and visually stunning
          images generated by DALL-E AI
        </p>
      </div>
      <div className="mt-16">
        <FormField
          labelName="Search posts"
          type="text"
          name="text"
          placeholder="Search something..."
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>
      <div className="mt-10">
        {searchText && (
          <h2 className="font-medium text-[#666e75] text-xl mb-3">
            Showing Resuls for{" "}
            <span className="text-[#222328]">{searchText}</span>:
          </h2>
          
        )}

        <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
          {posts.length === 0 ? (
            <div className="grid content-start">
              <Loader />
            </div>
          ) : (
            posts
              .filter(
                (item) =>
                  item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                  item.prompt.toLowerCase().includes(searchText.toLowerCase())
              )
              .reverse()
              .map((elt) => <Card key={elt._id} elt={elt} />)
          )}
        </div>
      </div>
    </section>
  );
}

export default Home;
