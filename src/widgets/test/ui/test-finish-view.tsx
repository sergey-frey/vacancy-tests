import { Button } from "@/shared/ui/button";

type TestFinishViewProps = {
	onResetTimer: () => void;
};

export const TestFinishView = ({ onResetTimer }: TestFinishViewProps) => {
	return (
		<div className="flex items-center gap-4 flex-wrap">
			<span>Finish</span>
			<Button onClick={onResetTimer}>Reset timer</Button>
		</div>
	);
};
