"use client";
import router, { useRouter } from "next/navigation";
import queryString from "query-string";
import React, { useState } from "react";

function Filter() {
  const router = useRouter();
  const [filter, setFilter] = useState("");
  const handleFilter = (filterType: string) => {
    if (filterType === filter) {
      setFilter("");
    } else {
      setFilter(filterType);
    }
    const currentQuery = queryString.parse(window.location.search);
    const updatedQuery = {
      ...currentQuery,
      filter: filterType === filter ? "" : filterType,
    };

    const url = queryString.stringifyUrl(
      {
        url: window.location.pathname,
        query: updatedQuery,
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  };
  return (
    <div className="flex space-x-6 p-5">
      {filter}
      <button
        onClick={() => handleFilter("react")}
        className={` px-4 py-2 text-gray-300 rounded-xl ${
          filter === "react" ? "bg-main" : "bg-primary"
        }`}
      >
        React
      </button>
      <button
        onClick={() => handleFilter("vue")}
        className={` px-4 py-2 text-gray-300 rounded-xl ${
          filter === "vue" ? "bg-main" : "bg-primary"
        }`}
      >
        Vue
      </button>
    </div>
  );
}

export default Filter;
