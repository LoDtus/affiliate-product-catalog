import { Button } from "antd";

export default function CookieBanner() {
    return (
        <div className="p-3 border rounded-lg bg-white">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum sed voluptate eligendi ex at architecto consequatur cumque magni? Repellendus ab esse atque perferendis aliquam possimus omnis animi dignissimos rerum inventore!</p>

            <div className="flex gap-2 items-center">
                <div className="flex gap-2 items-center">
                    <Button>
                        Accept All
                    </Button>
                    <Button>
                        Reject All
                    </Button>
                </div>
                <Button>
                    Cookie Settings
                </Button>
            </div>
        </div>
    );
};