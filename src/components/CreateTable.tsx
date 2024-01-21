import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export function CreateTable(props) {
  const headers = Object.keys(props).reverse();

  return (
    <>
      <table className="min-w-full divide-y divide-gray-200 mt-16 mb-24">
        <thead className="bg-lime-500">
          <tr>
            {headers.map((header) => (
              <th className="text-center text-xs font-medium text-white border">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            {headers.map((header) => (
              <td className="text-center whitespace-nowrap border font-medium">
                {props[header]}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}
