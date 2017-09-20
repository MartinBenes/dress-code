# RELEASING

### Step by step instructions to release a new version of the dress-code.

1. Pull latest from the `master` branch and run the following command. Ensure that you follow the
[semver specification](http://semver.org/).

    ```
    git checkout master
    git pull
    npm run release [ major | minor | patch | <newversion> ]
    ```

1. A release branch will be created and pushed automatically with a generated changelog. Confirm the changelog is accurate and clear. Feel free the manually edit the changelog in the release branch. 

1. Open a PR from the release branch to `master`.

1. After the PR is merged, publish to npm. This will output the newly published version for verification, create and push the tag and deploy the demo.

    ```
    git checkout master
    git pull
    npm publish
    ```