import webpack from "webpack";
import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";
import OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";
// import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const ForkTsCheckerNotifierWebpackPlugin = require("fork-ts-checker-notifier-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

const rootPath = path.resolve(__dirname, "../");
const appPath = (nextPath: string) => path.join(rootPath, nextPath);

const pkg = require("../package.json");
const GENERATOR_VERSION = pkg.dependencies["@himenon/openapi-typescript-code-generator"];

export const generateConfig = (isProduction: boolean): webpack.Configuration => {
  // const isCI = process.env.CI;

  // const babelLoader: webpack.RuleSetUse = {
  //   loader: "babel-loader",
  // options: {
  //   cacheDirectory: true,
  //   presets: ["@babel/preset-env"],
  // },
  // };

  const cssLoaders: webpack.RuleSetUse = [
    {
      loader: "css-loader",
      options: {
        localsConvention: "camelCase",
        importLoaders: 2,
        modules: {
          localIdentName: "___[local]___[hash:base64:5]",
        },
      },
    },
    {
      loader: "postcss-loader",
      options: {
        plugins: [
          require("autoprefixer")({
            grid: true,
          }),
        ],
      },
    },
    {
      loader: "sass-loader",
      options: {
        implementation: require("sass"),
        sassOptions: {
          fiber: false,
        },
      },
    },
  ];

  return {
    mode: isProduction ? "production" : "development",
    target: "web",
    stats: {
      errorDetails: true,
    },
    optimization: {
      minimize: isProduction,
      runtimeChunk: false,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.optimize\.css$/g,
          cssProcessor: require("cssnano"),
          cssProcessorPluginOptions: {
            preset: ["default", { discardComments: { removeAll: true } }],
          },
          canPrint: true,
        }),
      ],
      splitChunks: {
        chunks: "initial",
        cacheGroups: {
          default: false,
          vendors: false,
          lib: {
            name: "lib",
            chunks: "initial",
            minChunks: 2,
            test: ({ resource: filePath, context: dirPath }, chunk) => {
              return [/src/].some(pattern => pattern.test(filePath));
            },
            enforce: true,
          },
          vendor: {
            name: "vendor",
            chunks: "initial",
            test: /node_modules/,
            enforce: true,
          },
          styles: {
            name: "styles",
            test: /\.scss$/,
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
    entry: {
      application: ["core-js", "regenerator-runtime/runtime", "typescript", "./src/index.tsx"],
      "editor.worker": "monaco-editor/esm/vs/editor/editor.worker.js",
      "ts.worker": "monaco-editor/esm/vs/language/typescript/ts.worker",
    },
    devtool: "cheap-source-map",
    devServer: {
      contentBase: "./dist",
    },
    plugins: [
      new MonacoWebpackPlugin({
        languages: ["json", "typescript", "yaml"],
      }),
      // isProduction && !isCI && new BundleAnalyzerPlugin(),
      // new FriendlyErrorsWebpackPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new ForkTsCheckerNotifierWebpackPlugin({ excludeWarnings: true }),
      new webpack.HotModuleReplacementPlugin(),
      new CleanWebpackPlugin(),
      isProduction &&
        new MiniCssExtractPlugin({
          filename: "stylesheets/[name].[contenthash:8].css",
          chunkFilename: "stylesheets/[name].[contenthash:8].chunk.css",
        }),
      new HtmlWebpackPlugin({
        title: isProduction ? "Production" : "Development",
        template: "public/index.html",
      }),
      new WebpackManifestPlugin(),
      new webpack.ProvidePlugin({
        process: "process",
      }),
      new webpack.DefinePlugin({
        "process.env.GENERATOR_VERSION":`"${GENERATOR_VERSION}"`,
      })
    ].filter(Boolean),
    output: {
      filename: "scripts/[name].bundle.js",
      path: path.resolve(__dirname, "../dist"),
      clean: true,
    },
    externals: [
      {
        react: "React",
        "react-dom": "ReactDOM",
      },
    ],
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".css", ".scss", ".json"],
      alias: {
        "@app/component": appPath("./src/component/index.ts"),
        "@app/container": appPath("./src/container/index.ts"),
        "@app/domain": appPath("./src/domain/index.ts"),
        "@app/infra": appPath("./src/infra/index.ts"),
        "@app/style": appPath("./src/style/index.ts"),
        React: appPath("node_modules/react"),
        ReactDOM: appPath("node_modules/react-dom"),
        process: "process",
      },
      // browserで参照するmoduleのfallback
      fallback: {
        path: require.resolve("path-browserify"),
        os: require.resolve("os-browserify/browser"),
        // https://stackoverflow.com/questions/65018431/webpack-5-uncaught-referenceerror-process-is-not-defined
        process: require.resolve("process/browser"),
        fs: false,
        perf_hooks: false,
        buffer: false,
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: [/__tests__/, /node_modules/],
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.json",
            transpileOnly: true,
          },
        },
        {
          test: /\.scss$/,
          use: [isProduction ? MiniCssExtractPlugin.loader : "style-loader", ...cssLoaders].filter(Boolean) as webpack.RuleSetUse,
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            presets: [["@babel/preset-env"]],
          },
        },
        {
          test: /\.ttf$/,
          use: ["file-loader"],
        },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, "src"),
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
              options: {
                modules: true,
                namedExport: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, "../node_modules/monaco-editor"),
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  };
};
